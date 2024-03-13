import { FC } from 'react';
import { NavIdProps, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { AgifyForm, useAgifyQuery } from '../features/agify';

export const Agify: FC<NavIdProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();
  const { data } = useAgifyQuery()
  console.log(data)

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
        Agify
      </PanelHeader>
      <AgifyForm></AgifyForm>
    </Panel>
  );
};
