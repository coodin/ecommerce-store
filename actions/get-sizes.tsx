import { Size } from "@/types";
//import { revalidatePath } from "next/cache";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL, { cache: "no-store" });

  return res.json();
};

export default getSizes;
