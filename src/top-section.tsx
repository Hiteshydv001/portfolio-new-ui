import { Flex } from '@chakra-ui/react';
import { ChatGPTMenu } from './ChatGPTMenu';
import { Avatar } from './components/ui/avatar';

export function TopSection() {
  return (
    <Flex justify='space-between' align='center' p='2'>
      <ChatGPTMenu />
      <Avatar
        name='[Your Name]' // Replace with your name
        size='sm'
        colorPalette='teal'
        variant='solid'
        mr='3'
      />
    </Flex>
  );
}