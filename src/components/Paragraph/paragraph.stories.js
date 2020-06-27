import React from 'react'
import Paragraph from '.'

export default {
  title: '排版/Paragraph',
  compnent: Paragraph
}

export const Default = () => (
  <React.Fragment>
    <Paragraph>这是一个段落</Paragraph>
    <Paragraph>这是一个段落</Paragraph>
  </React.Fragment>
)

export const Ellipsis = () => (
  <Paragraph ellipsis>这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落这是一个段落</Paragraph>
)