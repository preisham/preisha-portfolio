
import Widget from './Widget';

interface StatusWidgetProps {
  title: string;
  status: string;
  lastUpdated?: string;
  icon?: React.ReactNode;
}

const StatusWidget = ({ title, status, lastUpdated, icon }: StatusWidgetProps) => {
  return (
    <Widget compact className="text-center">
      {icon && <div className="mb-2 flex justify-center">{icon}</div>}
      <h4 className="font-medium text-foreground text-sm mb-1">{title}</h4>
      <p className="text-muted-foreground text-xs mb-1">{status}</p>
      {lastUpdated && (
        <p className="text-muted-foreground text-xs opacity-60">{lastUpdated}</p>
      )}
    </Widget>
  );
};

export default StatusWidget;
