
export const validations = (email: string) =>{
    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}