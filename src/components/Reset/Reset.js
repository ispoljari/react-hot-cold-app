import React from 'react';
import { Button } from '@smooth-ui/core-sc';

const Reset = ({resetGame}) => (
  <div>
    <Button variant="danger" width={1} mt={10} minHeight={40} fontSize={22} type="button" onClick={resetGame}>
      Reset Game
    </Button>
  </div>
);

export default Reset;