import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const appFooterStyles = makeStyles({
  root: {
    paddingTop: 24,
    paddingBottom: 24,
    textAlign: 'center',
  },
  a: {
    color: '#ff5722',
    '&:hover, &:focus': {
      color: '#e64a19',
    }
  },
});

export const AppFooter = () => {
  const classes = appFooterStyles();

  return(
    <Container maxWidth="lg" className={classes.root}>
      <p>For my final CT capstone project, I have created a fluid website using Javascript, React and <a href="https://www.thecocktaildb.com" target="_blank" rel="noopener noreferrer" className={classes.a}>TheCocktialDB</a> API to to generate cocktail recipes through random search. <br/>Enjoy! 🍹🥂<br/>The full code and repository can also be viewed on my <a href="https://github.com/nhporti2/capstone_project/tree/main/cocktail-app" target="_blank" rel="noopener noreferrer" className={classes.a}>GitHub</a>.</p>
    </Container>
  );
}
