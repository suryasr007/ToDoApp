    var toDoList={
        todos:[],

        displayToDos: function(){
            if(this.todos.length === 0)
                console.log("Your To-do list is empty");
            else{
                console.log("my ToDo list:");
                for(var i=0;i<this.todos.length;i++){
                    if(this.todos[i].completed=== true){ // verying whether EACH todo is completed or not
                        console.log('(x) ',this.todos[i].todoText);
                }
                    else
                        console.log('() ', this.todos[i].todoText);
                    }
                }
        },

        addToDos: function(todoText){  //Pusing objects instead of text to the array
            this.todos.push({
                todoText:todoText,     // Yes, we can declare 
                completed: false
            });
            this.displayToDos();
        },

        changeToDos:function(position,newtodoText){
            //this.todos[position]=newValue;
            this.todos[position].todoText=newtodoText;
            this.displayToDos();
        },

        deleteToDos:function(position){
            this.todos.splice(position, 1);
            this.displayToDos();
        },

        toggleToDos:function(position){
            var todo = this.todos[position];
            todo.completed=!todo.completed;
            this.displayToDos();
        },
        
        toggleAll:function(){
        
            completedToDos = 0;
            totalToDos=this.todos.length;
            //check whether each todo is completed
            for(var i=0;i<totalToDos;i++){
                if(this.todos[i].completed === true)
                    completedToDos++;
                
            }
            // check whether all todos are completed
            if(completedToDos==totalToDos){     // if completed make everything false
                for(var i=0;i<totalToDos;i++)
                    this.todos[i].completed=false;
            }
            else{
                for(var i=0;i<totalToDos;i++)
                    this.todos[i].completed=true;
            }
            
            this.displayToDos();
        
        }
        
    }