"use client";

import React, { useEffect, useRef } from "react";
import { ChartResult } from "@/types/responses/ChartData";
import HighchartsReact from "highcharts-react-official";
import Highcharts, { Point } from "highcharts";

import Highcharts3D from "highcharts/highcharts-3d";

if (typeof Highcharts3D === "function") {
  Highcharts3D(Highcharts);
}
Highcharts.setOptions({
    lang: {
      noData: "No data to display",
    },
  });
interface PieChartProps {
  data: ChartResult[];
  title: string;
  yAxisTitle?: string;
}

interface CustomPoint extends Point {
  dataLabel?: Highcharts.SVGElement;
}

const PieChart: React.FC<PieChartProps> = ({ data, title, yAxisTitle }) => {
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  useEffect(() => {
    const chart = chartRef.current?.chart;
    if (chart) {
      chart.series.forEach((series) => {
        series.points.forEach((point) => {
          const customPoint = point as CustomPoint;
          if (customPoint.dataLabel) {
            customPoint.dataLabel.css({
              color: "#000000",
            });
          }
        });
      });
    }
  }, [data]);

  const chartOptions = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
      height: 600,
      width: 800,
      spacing: [20, 20, 20, 20],
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
      },
    },
    title: {
      text: title,
      align: "center",
      style: {
        color: "#000000",
        fontSize: "18px",
        fontWeight: "bold",
      },
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      backgroundColor: "#ffffff",
      borderColor: "#000000",
      style: {
        color: "#000000",
        fontSize: "12px",
        direction: "rtl",
      },
      useHTML: true,
      formatter(this: {
        point: { name: string; y: number };
        percentage?: number;
      }) {
        return `<div style="text-align: right;">
            <b>${this.point.name}</b>: ${this.point.y?.toLocaleString()} ${
          yAxisTitle || ""
        } (${this.percentage?.toFixed(2)}%)
          </div>`;
      },
    },
    legend: {
      align: "center",
      layout: "horizontal",
      itemStyle: {
        color: "#000000",
        fontSize: "14px",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        depth: 45,
        dataLabels: {
          enabled: true,
          format: `{point.name}: {point.y} ${yAxisTitle || ""}`,
          style: {
            fontSize: "14px",
            fontWeight: "normal",
            textOutline: "none",
          },
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Value",
        data: data.map((item) => ({
          name: item.title,
          y: item.value,
        })),
      },
    ],
  };

  return (
    <div className="flex justify-center items-center">
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        ref={chartRef}
      />
    </div>
  );
};

export default PieChart;
