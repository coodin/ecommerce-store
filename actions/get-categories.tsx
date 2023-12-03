import { Category } from "@/types";
import { revalidatePath } from "next/cache";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL, {
    cache: "no-store",
  });

  return res.json();
};

export default getCategories;
