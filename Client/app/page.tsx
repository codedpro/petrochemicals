import { Metadata } from "next";
import { fetchChartData } from "@/lib/fetchChartData";
import dynamicImport from "next/dynamic";
import Layout from "@/components/layout";

const PieChart = dynamicImport(() => import("@/components/charts/PieChart"), {
  ssr: true,
});

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Chart Data Filter",
};

interface Props {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

const ChartPage = async ({ searchParams }: Props) => {
  try {
    const resolvedSearchParams = await searchParams;

    const params = new URLSearchParams();

    for (const key in resolvedSearchParams) {
      const value = resolvedSearchParams[key];
      if (Array.isArray(value)) {
        value.forEach((v) => params.append(key, v));
      } else if (value !== undefined) {
        params.append(key, value);
      }
    }

    const data = await fetchChartData(params);

    return (
      <Layout>
        <div>
          <PieChart
            data={data.results}
            title={data.metadata.persian}
            yAxisTitle={data.metadata.y_axis_title}
          />
        </div>
      </Layout>
    );
  } catch (error) {
    console.error("Error fetching chart data:", error);
    return <div>Error loading chart data</div>;
  }
};

export default ChartPage;
