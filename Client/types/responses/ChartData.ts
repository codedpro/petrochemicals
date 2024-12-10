export interface Metadata {
    persian: string;
    icon: string;
    report_type: string;
    chart_type: string;
    x_axis: string;
    y_axis: string;
    function: string;
    order_by: string;
    y_axis_title: string;
  }
  
  export interface ChartResult {
    title: string;
    value: number;
  }
  
  export interface ChartDataResponse {
    metadata: Metadata;
    results: ChartResult[];
  }
  