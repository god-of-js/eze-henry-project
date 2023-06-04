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
      <p style={{ fontSize: '32px', fontFamily: "'Cinzel Decorative', cursive"}}>
        Within these scrolls lie the timeless echoes, the very words spoken by
        the brave fellowship and the wise cast of Middle-earth, forever
        preserving the essence of their journey.
      </p>
      {quotes.map(({ dialog, _id }) => (
        <QuoteItem quote={dialog} key={_id} />
      ))}
    </>
  );
}
