const quizData = {
    "HTML": {
        questions: [
            {
                question: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"],
                answer: "Hyper Text Markup Language"
            },
            {
                question: "Choose the correct HTML element for the largest heading:",
                options: ["<heading>", "<h6>", "<head>", "<h1>"],
                answer: "<h1>"
            },
            {
                question: "Which character is used to indicate an end tag?",
                options: ["*", "/", "<", "^"],
                answer: "/"
            },
            {
                question: "What is the correct way to create a hyperlink?",
                options: ["<link>text</link>", "<a href='url'>text</a>", "<url>text</url>", "<h ref='url'>text</h>"],
                answer: "<a href='url'>text</a>"
            },
            {
                question: "Which tag is used to insert an image?",
                options: ["<img>", "<image>", "<picture>", "<photo>"],
                answer: "<img>"
            },
            {
                question: "What is the correct HTML element for inserting a line break?",
                options: ["<br>", "<lb>", "<break>", "<line>"],
                answer: "<br>"
            },
            {
                question: "Which attribute is used to define inline styles?",
                options: ["style", "class", "id", "css"],
                answer: "style"
            },
            {
                question: "What does the <meta> tag define?",
                options: ["Metadata about the HTML document", "A menu system", "Mathematical equations", "Media files"],
                answer: "Metadata about the HTML document"
            },
            {
                question: "Which tag is used to define the title of an HTML document?",
                options: ["<title>", "<head>", "<h1>", "<header>"],
                answer: "<title>"
            },
            {
                question: "What is the correct HTML element for the most important heading?",
                options: ["<header>", "<h1>", "<heading>", "<important>"],
                answer: "<h1>"
            }
        ]
    },
    "CSS": {
        questions: [
            {
                question: "What does CSS stand for?",
                options: ["Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
                answer: "Cascading Style Sheets"
            },
            {
                question: "Which property is used to change the background color?",
                options: ["color", "bgcolor", "background-color", "canvas-color"],
                answer: "background-color"
            },
            {
                question: "How do you add a comment in CSS?",
                options: ["// this is a comment", "<!-- this is a comment -->", "/* this is a comment */", "# this is a comment"],
                answer: "/* this is a comment */"
            },
            {
                question: "Which property is used to change the text color?",
                options: ["text-color", "color", "font-color", "foreground"],
                answer: "color"
            },
            {
                question: "How do you select all <p> elements?",
                options: ["<p>", "*", "p", ".p"],
                answer: "p"
            },
            {
                question: "What is the correct syntax for an external style sheet?",
                options: ["<link rel='stylesheet' href='style.css'>", "<stylesheet>style.css</stylesheet>", "<style src='style.css'>", "<css href='style.css'>"],
                answer: "<link rel='stylesheet' href='style.css'>"
            },
            {
                question: "Which CSS property controls the text size?",
                options: ["text-size", "font-size", "size", "text-length"],
                answer: "font-size"
            },
            {
                question: "How do you select an element with id 'header'?",
                options: [".header", "#header", "header", "*header"],
                answer: "#header"
            },
            {
                question: "Which property is used to add space inside an element, around the content?",
                options: ["margin", "padding", "border", "spacing"],
                answer: "padding"
            },
            {
                question: "What is the default value of the position property?",
                options: ["relative", "absolute", "static", "fixed"],
                answer: "static"
            }
        ]
    },
    "PYTHON&ALGO": {
        questions: [
            {
                question: "How do you create a function in Python?",
                options: ["function my_function():", "def my_function():", "create my_function():", "def function my_function():"],
                answer: "def my_function():"
            },
            {
                question: "What is the correct way to create a list in Python?",
                options: ["list = (1, 2, 3)", "list = [1, 2, 3]", "list = {1, 2, 3}", "list = <1, 2, 3>"],
                answer: "list = [1, 2, 3]"
            },
            {
                question: "Which of the following is NOT a data type in Python?",
                options: ["int", "str", "char", "float"],
                answer: "char"
            },
            {
                question: "What keyword is used to create a conditional statement in Python?",
                options: ["if", "ifelse", "elif", "else if"],
                answer: "if"
            },
            {
                question: "How do you create a dictionary in Python?",
                options: ["dict = {key: value}", "dict = [key: value]", "dict = (key: value)", "dict = <key: value>"],
                answer: "dict = {key: value}"
            },
            {
                question: "What is the correct way to create a loop in Python?",
                options: ["for i in range(10):", "for i = 0; i < 10; i++:", "loop i in range(10):", "repeat i in range(10):"],
                answer: "for i in range(10):"
            },
            {
                question: "Which of the following is a correct variable name in Python?",
                options: ["1var", "_var", "var-name", "var name"],
                answer: "_var"
            },
            {
                question: "What does the len() function do in Python?",
                options: ["Returns the length of an object", "Creates a new list", "Deletes an object", "Converts to integer"],
                answer: "Returns the length of an object"
            },
            {
                question: "How do you import a module in Python?",
                options: ["include module", "import module", "load module", "require module"],
                answer: "import module"
            },
            {
                question: "What is the Big O notation for Binary Search?",
                options: ["O(n)", "O(log n)", "O(n²)", "O(2^n)"],
                answer: "O(log n)"
            }
        ]
    }
};