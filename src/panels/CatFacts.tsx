import { FC, useEffect, useRef, useState } from 'react';
import {
  Panel,
  PanelHeader,
  Button,
  Group,
  Div,
  NavIdProps,
  Textarea,
  FormItem,
} from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { useCatFactsMutation } from '../features/cats';

export const CatFacts: FC<NavIdProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();
  const [fact, setFact] = useState<string>('');

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current && fact) {
      const textarea = textareaRef.current;
      textarea.focus();
      const firstSpaceIndex = textarea.value.indexOf(' ');
      textarea.setSelectionRange(firstSpaceIndex, firstSpaceIndex);
    }
  }, [textareaRef.current, fact]);

  const { mutateAsync: getCatFact } = useCatFactsMutation();

  async function handleShowCatFact() {
    const catFact = await getCatFact();
    setFact(catFact.fact);
  }

  return (
    <Panel id={id}>
      <PanelHeader>Cat Facts</PanelHeader>
      <Div>
        <Button onClick={handleShowCatFact}>
          Show me cat facts
        </Button>
        <FormItem top="Your fact about cats:">
          <Textarea getRef={textareaRef} value={fact} />
        </FormItem>
      </Div>
      <Group>
        <Div>
          <Button stretched size="l" mode="secondary" onClick={() => routeNavigator.push('agify')}>
            Go to Agify page
          </Button>
        </Div>
      </Group>
    </Panel>
  );
};
