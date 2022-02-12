

export const getLocales = (str: string) =>   str?.split(",").map((type: string) => type.split(";")[0]) ?? ""