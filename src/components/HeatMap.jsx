import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

// Generate dummy data for last 200 days
const generateHeatmapData = (days = 200) => {
  const data = [];
  const today = new Date();
  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    data.push({
      date: date.toISOString().split("T")[0],
      count: Math.floor(Math.random() * 6), // Random activity from 0 to 5
    });
  }
  return data.reverse();
};

const Heatmap = () => {
  const data = generateHeatmapData();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-white">
        Activity Heatmap (Last 200 Days)
      </h2>

      <CalendarHeatmap
        startDate={new Date(Date.now() - 199 * 24 * 60 * 60 * 1000)}
        endDate={new Date()}
        values={data}
        classForValue={(value) => {
          if (!value || value.count === 0) return "color-empty";
          return `color-github-${Math.min(value.count, 4)}`;
        }}
        tooltipDataAttrs={(value) => ({
          "data-tooltip-id": "heatmap-tooltip",
          "data-tooltip-content": `${value.date}: ${
            value.count || 0
          } activities`,
        })}
        showWeekdayLabels={true}
      />

      {/* Tooltip with matching ID */}
      <Tooltip id="heatmap-tooltip" />
    </div>
  );
};

export default Heatmap;
