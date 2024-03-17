import { FC, useState } from 'react';
import {
  Panel,
  PanelHeader,
  Header,
  Button,
  Group,
  Cell,
  Div,
  Avatar,
  NavIdProps,
} from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { useCatFactsMutation } from '../features/cats';

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const Home: FC<HomeProps> = ({ id, fetchedUser }) => {
  const routeNavigator = useRouteNavigator();
  const [fact, setFact] = useState<string>('');

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
        <Div>Your fact about cats: {fact}</Div>
      </Div>
      <Group header={<Header mode="secondary">Navigation Example</Header>}>
        <Div>
          <Button stretched size="l" mode="secondary" onClick={() => routeNavigator.push('agify')}>
            Go to Agify page
          </Button>
        </Div>
      </Group>
    </Panel>
  );
};
