import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { Container, Paper, Grid, Typography, Box } from '@material-ui/core';
let lastId:number = 0;

function App() {

  const [items, setItems] = useState<TodoElementType[]>([]);

  const removeItem = (id:number) => {
    const result = items.filter(i => i.id !== id);
    setItems(result);
  };

  const checkItem = (id:number) => {
    const oldItem = items.find(i => i.id === id);
    if(oldItem){
      const target = {...oldItem, checked:!oldItem.checked};
      const result = items.filter(i => i.id !== id);
      setItems([...result, target]);
    }
  };

  const addItem = (itemText:string) => {
    const newItem: TodoElementType = { text:itemText, checked:false, id:lastId++ }; 
    setItems([...items, newItem]);
  };

  return (
    <Container maxWidth="sm">
      <Paper>
        <Grid container spacing={2}>
        <Grid item sm={12}>
          <Box pl={2} pt={2} >
            <Typography variant="h6" component="h6">
                Todo List
            </Typography>
          </Box>
        </Grid>
          <Grid item sm={12}>
            <TodoList items={items} removeItem={removeItem} checkItem={checkItem}/>
          </Grid>
          <Grid item sm={12}>
            <TodoForm addItem={addItem}/>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;