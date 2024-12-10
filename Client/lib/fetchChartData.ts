import { ChartDataResponse } from "@/types/responses/ChartData";

/* export const fetchChartData = async (params: URLSearchParams): Promise<ChartDataResponse> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL; // Set this in your .env file
  const response = await fetch(`${baseUrl}/reports/chart-data-filter/haftegi-chart4-data?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to fetch chart data");
  }

  return response.json();
};
 */

export const fetchChartData = async (params: URLSearchParams): Promise<ChartDataResponse> => {
   console.log(params)
    return {
      metadata: {
        persian: "نمودار مخازن پروپان ماهشهر",
        icon: "process.png",
        report_type: "chart_view",
        chart_type: "pie",
        x_axis: "title",
        y_axis: "value",
        function: "sum",
        order_by: "title",
        y_axis_title: "تن"
      },
      results: [
        {
          title: "ظرفیت خالی مخازن",
          value: 16486.7202
        },
        {
          title: "موجودی مخازن بوتان ماهشهر",
          value: 11714.499
        }
      ]
    };
  };