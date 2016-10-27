    var toDoList={
        todos:[],

//        displayToDos: function(){
//            //debugger; it is used to debug the javascript code in the browser.
//            if(this.todos.length === 0)
//                console.log("Your To-do list is empty");
//            else{
//                console.log("my ToDo list:");
//                for(var i=0;i<this.todos.length;i++){
//                    if(this.todos[i].completed=== true){ // verying whether EACH todo is completed or not
//                        console.log('(x) ',this.todos[i].todoText);
//                }
//                    else
//                        console.log('() ', this.todos[i].todoText);
//                    }
//                }
//        },

        addToDos: function(todoText){  //Pusing objects instead of text to the array
            //debugger;
            this.todos.push({
                todoText:todoText,     // Yes, we can declare 
                completed: false
            });
//            this.displayToDos();
        },

        changeToDos:function(position,newtodoText){
            //this.todos[position]=newValue;
            this.todos[position].todoText=newtodoText;
//            this.displayToDos();
        },

        deleteToDos:function(position){
            this.todos.splice(position, 1);
//            this.displayToDos();
        },

        toggleToDos:function(position){
            var todo = this.todos[position];
            todo.completed=!todo.completed;
//            this.displayToDos();
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
            
//            this.displayToDos();
        
        }
        
    };
    
   
var handlers={
    
//    displayToDosButton : function(){
//        toDoList.displayToDos();
//    },

    toggleAllButton : function(){
        toDoList.toggleAll();
        view.displayToDos();
    },
    
    addToDoButton :function(){
        var addToDoValue = document.getElementById('valueEnteredInTextBox');
        toDoList.addToDos(addToDoValue.value);
        addToDoValue.value = '';
        view.displayToDos();
    },
    
    toDoChangeButton : function(){
        var changeToDoPosition = document.getElementById('toDoChangePosition');
        var changeToDoValue = document.getElementById('toDoChangeText');
        toDoList.changeToDos(toDoChangePosition.valueAsNumber,toDoChangeText.value);
        changeToDoValue.value = '';
        view.displayToDos();
    },
    
    toDoDeleteButton : function(position){
     //   var deleteToDo =document.getElementById('deletePosition');
        toDoList.deleteToDos(position);
      //  deleteToDo.value ='';
        view.displayToDos();
    },
    toDoToggelButton : function(){
        var toogleToDo = document.getElementById('togglePosition');
        toDoList.toggleToDos(toogleToDo.valueAsNumber);
        toogleToDo.value='';
        view.displayToDos();
    }
};

var view ={  // to display the todos a li elements.
    displayToDos : function(){
        var toDoUl = document.querySelector('ul');  // Selecting the required query in DOM
        toDoUl.innerHTML = '';
        for(var i=0; i<toDoList.todos.length; i++){
             var toDoLi = document.createElement('li'); // creating the li element;
             var toDo = toDoList.todos[i];
             var toDosWithCompletion = ''; 
            
             if(toDo.completed === true){  // displaying toDo along with its completion status.
                 toDosWithCompletion ='(x) ' + toDo.todoText;
             }
             else{
                toDosWithCompletion ='( ) ' + toDo.todoText;
             }
             toDoLi.id=i;
             toDoLi.textContent=toDosWithCompletion;
             toDoLi.appendChild(this.createDeleteButtons());
             toDoUl.appendChild(toDoLi);
        }
    },
    createDeleteButtons : function(){
        var deleteButton =document.createElement('button');
        deleteButton.textContent='Delete';
        deleteButton.className='deleteButton';
        return deleteButton;
    },
    setUpEventListeners : function(){
            var toDosUl = document.querySelector('ul');
            toDosUl.addEventListener('click',function(event){
            var elementClicked = event.target;
            if(elementClicked.className === 'deleteButton' ){
                handlers.toDoDeleteButton(parseInt(elementClicked.parentNode.id));
            }
        });
    }
    
};



view.setUpEventListeners();


















