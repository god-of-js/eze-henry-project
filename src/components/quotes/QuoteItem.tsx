import "./QuoteItem.css";
interface Props {
  quote: string;
}
export default function QuoteItem({ quote }: Props) {
  return <div className="quote">{quote}</div>;
}
