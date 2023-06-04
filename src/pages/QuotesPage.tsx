import QuoteItem from "components/quotes/QuoteItem";
import { RootState } from "modules/index";
import { getQuotes } from "modules/quotes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toAnyAction from "utils/helpers";

export default function QuotesPage() {
  const dispatch = useDispatch();
  const quotes = useSelector((state: RootState) => state.quotes.quotes);

  useEffect(() => {
    dispatch(toAnyAction(getQuotes()));
  }, []);

  return (
    <>
      {quotes.map(({ dialog, _id }) => (
        <QuoteItem quote={dialog} key={_id} />
      ))}
    </>
  );
}
