import zod from "zod"


export const  schema=zod.object({
    title:zod.string(),
    author : zod.string(),
    publishYear: zod.number()
});