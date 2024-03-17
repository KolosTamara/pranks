import { FC } from 'react';
import {
  Button,
  Div,
  Group,
  NavIdProps,
  Panel,
  PanelHeader,
} from '@vkontakte/vkui';
import { CatFacts } from '../features/cats';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export const CatPanel: FC<NavIdProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader>Cat Facts</PanelHeader>
      <CatFacts />
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
