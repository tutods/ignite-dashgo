import { theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";

const getChartOptions = (categories: string[]): ApexOptions => ({
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray["500"],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray["600"],
    },
    axisTicks: {
      color: theme.colors.gray["600"],
    },
    categories,
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
});

export { getChartOptions };