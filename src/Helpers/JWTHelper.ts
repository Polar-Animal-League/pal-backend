import * as crypto from "crypto";
import { sign, verify } from "jsonwebtoken"

export class JWTHelper {
    public static async generateToken(userId: number): Promise<string> {
        return new Promise((resolve, reject) => {
            if (!process.env.JWT_SECRET) {
                reject(new Error("Missing JWT_Token"))
                return
            }

            sign({
                "user_id": userId,
            },
                process.env.JWT_SECRET, {
                expiresIn: "5m"
            },
                function (err, token) {
                    if (err) reject(err);
                    if (token) {
                        resolve(token);
                    }
                }
            )
        });
    }

    public static validateToken(token: string): boolean {

        if (!process.env.JWT_SECRET) {
            throw new Error("Missing JWT_Token")
        }

        verify(token, process.env.JWT_SECRET, function (err, decoded: object | undefined) {
            if (decoded) {
                return true
            } else {
                return false
            }
        });

        return false
    }

    public static refreshToken(token: string): string {
        return "foo"
    }
}