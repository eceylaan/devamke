import { defaultHeader } from "@/utils/header";
import { notFound, redirect } from "next/navigation";

const DynamicURLPage = async ({ params }) => {
  console.log(params);
  //
  const response = await fetch(`https://ifqlrhtthowecgprpcmq.supabase.co/rest/v1/urls?short_url=eq.${params.url}&select=*`, {
    method: "GET",
    headers: defaultHeader,
  });

  const data = await response.json();
  const newData = data[0];

  if (!newData) {
    return notFound();
  }

  return redirect(newData.long_url);
};

export default DynamicURLPage;
