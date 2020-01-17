import React from 'react';
import FullHeader from '../src/Main';
import { storiesOf } from '@storybook/react';

storiesOf('FullHeader', module)
  .add('with title', () => {
    <FullHeader
      title="This is a title"
    />
  })
  .add('with title and subtitle', () => {
    <FullHeader
      title="This is a title"
      title="And this is a subtitle"
    />
  })
  .add('with title, subtitle and bgcolor', () => {
    <FullHeader
      title="Potatoe title"
      subtitle="Banana subtitle"
      bgcolor="#3299BB"
    />
  })
  .add('with title, subtitle, bgcolor and textColor', () => {
    <FullHeader
      title="Potatoe title"
      subtitle="Banana subtitle"
      bgcolor="#3299BB"
      textColor="#FF9900"
    />
  })
  .add('with title, subtitle, bgcolor, textColor and font', () => {
    <FullHeader
      title="Potatoe title"
      subtitle="Banana subtitle"
      bgcolor="#3299BB"
      textColor="#FF9900"
      font="cursive"
    />
  })
  .add('with title, subtitle and bgImg', () => {
    <FullHeader
      title="Potatoe title"
      subtitle="Banana subtitle"
      bgImg=""
    />
  })
  .add('with title, subtitle and video', () => {
    <FullHeader
      title="Potatoe title"
      subtitle="Banana subtitle"
      video=""
    />
  })
