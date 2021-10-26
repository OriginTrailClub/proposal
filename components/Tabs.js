import * as React from "react";

import { styled } from "stitches.config";

import { Item, useCollection } from '@react-stately/collections';
import { useTab, useTabList, useTabPanel } from "@react-aria/tabs";
import { useTabListState } from '@react-stately/tabs';
import { ListCollection } from '@react-stately/list';

import useFindElementOfType from "hooks/useFindElementOfType";

const TabItemContainer = styled('li', {
  px: '$regular',
  py: '$small',
  textStyle: '$action',
  color: '$text-subtle',
  borderWidth: 1,
  borderBottomWidth: 2,
  borderColor: 'transparent',
  borderStyle: 'solid',
  marginBottom: -2,
  variants: {
    selected: {
      true: {
        color: '$indigo-600',
        borderColor: '$indigo-100',
        backgroundColor: '$indigo-50',
        '&:after': {
          'content': '',
          position: 'absolute',
          bottom: -2,
          left: -1,
          right: -1,
          height: 2,
          backgroundColor: '$indigo-600',
        }
      }
    }
  }
});

function TabItem({ item, state }) {
  let ref = React.useRef();

  let { key, rendered } = item;

  let { tabProps } = useTab({ key }, state, ref);

  let isSelected = state.selectedKey === key;

  return (
    <TabItemContainer {...tabProps} selected={isSelected} ref={ref}>
      {rendered}
    </TabItemContainer>
  );
}

const TabListContainer = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  margin: 0,
  padding: 0,
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  borderBottomColor: '$gray-200',
});

function TabList({ state, ...props }) {
  let ref = React.useRef();

  let { tabListProps } = useTabList(props, state, ref);

  return (
    <TabListContainer ref={ref} {...tabListProps}>
      {Array.from(state.collection).map(item => (
        <TabItem key={item.key} item={item} state={state} />
      ))}
    </TabListContainer>
  );
}

function TabPanel({ state, ...props }) {
  let ref = React.useRef();

  const { tabPanelProps } = useTabPanel(props, state, ref);

  return (
    <div {...tabPanelProps} ref={ref}>
      {props.children}
    </div>
  )
}

function TabPanels({ state, ...props }) {
  const factory = nodes => new ListCollection(nodes);
  const collection = useCollection(props, factory, { suppressTextValueWarning: true });

  const selectedItem = collection.getItem(state.selectedKey);

  return (
    <div>
      {selectedItem != null ? (
        <TabPanel {...selectedItem?.props} state={state} key={selectedItem.key} />
      ) : undefined}
    </div>
  );
}

const TabsContainer = styled('div', {
  display: 'flex',
  width: '100%',
  gap: '$large',
  flexDirection: 'column',
});

function Tabs(props) {
  let ref = React.useRef();

  const TabList = useFindElementOfType(props.children, Tabs.List);
  const TabPanels = useFindElementOfType(props.children, Tabs.Panels);

  let state = useTabListState(TabList.props);

  return (
    <TabsContainer ref={ref}>
      {React.cloneElement(TabList, { state })}
      {React.cloneElement(TabPanels, { state })}
    </TabsContainer>
  )
}

Tabs.List = TabList;
Tabs.Item = Item;
Tabs.Panels = TabPanels;
Tabs.Panel = Item;

export default Tabs
