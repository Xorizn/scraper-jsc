import FormData from "form-data";

declare function textpro(
  url: string,
  text: string[]
): Promise<{
  image: string;
  image_code: string;
}>;

declare function post(
  url: string,
  formdata?: Record<string, string | string[]>,
  cookies?: string
): Promise<any>;

export {
  textpro
};
