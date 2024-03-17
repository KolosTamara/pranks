import { Button, Div, FormItem, Textarea } from "@vkontakte/vkui";
import { useEffect, useRef, useState } from "react";
import { useCatFactsMutation } from "../state/cats.mutation";

export function CatFacts() {
  const [fact, setFact] = useState<string>('');

  const { mutateAsync: getCatFact, isPending } = useCatFactsMutation();

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current && fact) {
      const textarea = textareaRef.current;
      textarea.focus();
      const firstSpaceIndex = textarea.value.indexOf(' ');
      textarea.setSelectionRange(firstSpaceIndex, firstSpaceIndex);
    }
  }, [textareaRef.current, fact]);

  async function handleShowCatFact() {
    const catFact = await getCatFact();
    setFact(catFact.fact);
  }
  return (
    <Div>
      <Button disabled={isPending} onClick={handleShowCatFact}>
        Show me cat facts
      </Button>
      <FormItem top="Your fact about cats:">
        <Textarea getRef={textareaRef} value={fact} />
      </FormItem>
    </Div>
  )
}
