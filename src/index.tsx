import React, {FC} from 'react';

export default class App {
  public doStuff(message: string = 'message'): void {
    console.log(message);
  }
}

const Thing: FC = () => (
  <div>
    <h2>Thing</h2>
  </div>
);
