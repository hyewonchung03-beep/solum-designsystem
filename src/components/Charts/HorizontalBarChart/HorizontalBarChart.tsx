import styles from './HorizontalBarChart.module.css';

export interface BarSegment {
  value: number;
  color?: string;
}

export interface HorizontalBarChartRow {
  label: string;
  left: BarSegment[];
  right: BarSegment[];
}

export interface HorizontalBarChartProps {
  rows: HorizontalBarChartRow[];
  className?: string;
  labelWidth?: number;
  leftColor?: string;
  rightColor?: string;
}

const DEFAULT_LEFT = 'var(--color-light-blue-extended)';
const DEFAULT_RIGHT = 'var(--color-brand-extended)';

function BarGroup({
  segments,
  align,
  defaultColor,
}: {
  segments: BarSegment[];
  align: 'left' | 'right';
  defaultColor: string;
}) {
  const total = segments.reduce((sum, s) => sum + s.value, 0);

  return (
    <div className={[styles.barGroup, styles[`align-${align}`]].join(' ')}>
      {segments.map((segment, i) => (
        <div
          key={i}
          className={styles.bar}
          style={{
            flexGrow: segment.value,
            backgroundColor: segment.color ?? defaultColor,
          }}
          title={String(segment.value)}
        />
      ))}
      {total === 0 && <span className={styles.barPlaceholder} />}
    </div>
  );
}

export function HorizontalBarChart({
  rows,
  className,
  labelWidth = 150,
  leftColor = DEFAULT_LEFT,
  rightColor = DEFAULT_RIGHT,
}: HorizontalBarChartProps) {
  return (
    <div
      className={[styles.chart, className].filter(Boolean).join(' ')}
      data-node-id="8535:161043"
      role="img"
      aria-label="Horizontal bi-directional bar chart"
    >
      {rows.map((row, index) => (
        <div key={index} className={styles.row}>
          <div className={styles.label} style={{ width: labelWidth }}>
            {row.label}
          </div>
          <div className={styles.bars}>
            <BarGroup segments={row.left} align="left" defaultColor={leftColor} />
            <BarGroup segments={row.right} align="right" defaultColor={rightColor} />
          </div>
        </div>
      ))}
    </div>
  );
}
