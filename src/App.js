import React, {Component} from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import AppHeader from './components/AppHeader/AppHeader';
import SearchPanel from './components/SearchPanel/SearchPanel';
import AddTask from './components/AddTask/AddTask';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            todoData: [
                {
                    id: 1,
                    label: 'Drink coffee',
                    important: false,
                    done : true
                },
                {
                    id: 2,
                    label: 'Make some app',
                    important: true,
                    done : false
                },
                {
                    id: 3,
                    label: 'Kill zombie',
                    important: false,
                    done : false
                },
                {
                    id: 4,
                    label: 'Have a lunch',
                    important: true,
                    done : true
                }
            ],
            term: '',
            filter: 'all'
        }
    }

    onDelete = (id) => {
        this.setState(({todoData})=> {
            const indx = todoData.findIndex((el) => el.id === id );

            const newArray = [...todoData.slice(0, indx),
                             ...todoData.slice(indx +1)];
            return {
                todoData: newArray
            }
        })
    };
    onLabelClick = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: todoData.map(el => {
                    el.done = (el.id === id) ? !el.done: el.done;
                    return el;
                })
            };
        });
    };
    onMarkImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: todoData.map(el => {
                    el.important = (el.id === id) ? !el.important: el.important;
                    return el;
                })
            };
        });
    };

    handleSearchValue = (e) => {
        const termValue = e.target.value.toLowerCase();
        this.setState({term: termValue})
    };

    search = (items, term) => {
        if(term.length === 0 ) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term) > -1;
        });
    };

    filter = (items, filter) => {
        switch (filter) {
            case "all":
                return items;
            case "active":
                return items.filter((item) => !item.done);
            case "done":
                return items.filter((item) => item.done);
            default:
                return items;
        }
    };

    onFilterChange = (name)=>{
        this.setState({filter:name});
    }

    addTask = (label) => {
        const maxId = this.state.todoData.reduce(
            (max, curr) => Math.max(max, curr.id),
            0
        );
        let newItem = {
            id: maxId + 1,
            label: label,
            important: false,
            done: false
        };
        this.setState({
            todoData: [...this.state.todoData, newItem]
        });
      };


  render() {
      const {todoData, term, filter} = this.state;
      const doneCount = todoData.filter((el) => el.done).length;
      const todoCount = todoData.length - doneCount;

      const visibleItems = this.filter(
          this.search(todoData, term),filter
      );

      return (
          <div className="App">
              <AppHeader active={todoCount} done={doneCount} />
              <SearchPanel handleSearchValue={this.handleSearchValue}
                            filter = {filter}
                            onFilterChange={this.onFilterChange} />
              <TodoList 
                        todoData={visibleItems}
                        onDelete={this.onDelete}
                        onLabelClick={this.onLabelClick}
                        onMarkImportant={this.onMarkImportant}/>

                <AddTask addTask={this.addTask}/>
          </div>
      );
  }
}