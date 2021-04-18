# view-logics
This library introduce some helpers to simplify conditional rendering logic in React. 
Is heavily inspired in the classNames library and in the Rust programing languaje.

## when
Recive an array of [condition, component] pairs and returns a view containing all the components wich paired conditions are trues

### A React Component with conditional rendering parts
```JSX
const Home = ({ showNav, content, searchEnabled }) => (
  <>
    {showNav && <Nav />}
    {searchEnabled && content && <SearchBar content={content} />}
    {content ? <Cards content={content} /> : <Error />}
  </>
);

export default Home;
```

### The Same Component Using when
```JSX
import { when } from "view-logics";

const Home = ({ showNav, content, searchEnabled }) =>
  when([
    [showNav, <Nav />],
    [searchEnabled && content, <SearchBar content={content} />],
    [content, <Cards content={content} />],
    [!content, <Error />],
  ]);

export default Home;
```

## match
Recive an array of [condition, component] pairs and returns a view containing the first component wich paired condition is true.

### A React Component with conditional rendering parts
```JSX
const Number = ({ number }) => (
  <>
    {number < 0 ? (
      <Negative number={number} />
    ) : (
      <>
        {number % 2 === 0 ? <Pair number={number} /> : <Odd number={number} />}
      </>
    )}
  </>
);

export default Number;
```

### The Same Component Using match
```JSX
import { match } from "view-logics";

const Number = ({ number }) =>
  match([
    [number < 0, <Negative number={number} />],
    [number % 2 === 0, <Pair number={number} />],
    [true, <Odd number={number} />],
  ]);

export default Number;
```

## times
Recive an array of [cuantity | condition, component] pairs and returns a view containing the components n times the cuantity if is a Number or once if is a trusy value.

### A React Component with conditional rendering parts
```JSX
const Rate = ({ stars }) => (
  <>
    <Line />
    <Line />
    {Array.from(Array(stars).keys()).map((e) => (
      <strong>*</strong>
    ))}
    <Line />
    <Line />
  </>
);

export default Rate;
```

### The Same Component Using times
```JSX
import { times } from "view-logics";

const Rate = ({ stars }) => times(
    [
        [2, <Line />]
        [stars, <strong>*</strong>]
        [2, <Line />]
    ]
);

export default Rate;
```

## all
Recive an array of [ conditions ] and returns a boolean if al conditions are trusy values

```JSX
import { all } from "view-logics";

const consitions = [ condidition1, condition2, condition3 ]
```