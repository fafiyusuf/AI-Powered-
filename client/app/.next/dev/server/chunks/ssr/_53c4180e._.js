module.exports = [
"[project]/components/chat-message.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatMessage",
    ()=>ChatMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ChatMessage({ message, onAddToNotes }) {
    const isUser = message.role === "user";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex ${isUser ? "justify-end" : "justify-start"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${isUser ? "bg-indigo-600 text-white rounded-br-none" : "bg-slate-700 text-slate-100 rounded-bl-none"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm whitespace-pre-wrap",
                    children: message.content
                }, void 0, false, {
                    fileName: "[project]/components/chat-message.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-3 mt-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-xs ${isUser ? "text-indigo-200" : "text-slate-400"}`,
                            children: new Date(message.timestamp).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit"
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/chat-message.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        !isUser && message.kind === "summary" && onAddToNotes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onAddToNotes(message.content),
                            className: "text-xs px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md",
                            children: "Add to Notes"
                        }, void 0, false, {
                            fileName: "[project]/components/chat-message.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chat-message.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/chat-message.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/chat-message.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/mockData/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockFlashcards",
    ()=>mockFlashcards,
    "mockNotes",
    ()=>mockNotes,
    "mockQuizzes",
    ()=>mockQuizzes,
    "mockUsers",
    ()=>mockUsers
]);
const mockUsers = [
    {
        id: "1",
        email: "student@example.com",
        name: "Alex Student",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
    }
];
const mockNotes = [
    {
        id: "1",
        title: "React Hooks Basics",
        content: "useState, useEffect, useContext are fundamental hooks in React. useState manages local component state...",
        subject: "React",
        createdAt: new Date("2025-11-05"),
        updatedAt: new Date("2025-11-08"),
        userId: "1"
    },
    {
        id: "2",
        title: "TypeScript Interfaces",
        content: "Interfaces define the structure of objects. They are used for type checking and ensuring consistency...",
        subject: "TypeScript",
        createdAt: new Date("2025-11-03"),
        updatedAt: new Date("2025-11-07"),
        userId: "1"
    },
    {
        id: "3",
        title: "Calculus - Derivatives",
        content: "The derivative of a function represents the rate of change. Power rule: d/dx(x^n) = nx^(n-1)...",
        subject: "Calculus",
        createdAt: new Date("2025-11-01"),
        updatedAt: new Date("2025-11-09"),
        userId: "1"
    }
];
const mockFlashcards = [
    {
        id: "1",
        front: "What is useState used for?",
        back: "useState is a React hook that lets you add state to functional components.",
        subject: "React",
        createdAt: new Date("2025-11-06"),
        userId: "1",
        difficulty: "easy"
    },
    {
        id: "2",
        front: "What is the Event Loop?",
        back: "The Event Loop handles asynchronous operations in JavaScript by managing the call stack and callback queue.",
        subject: "JavaScript",
        createdAt: new Date("2025-11-05"),
        userId: "1",
        difficulty: "hard"
    },
    {
        id: "3",
        front: "Define a derivative",
        back: "A derivative measures the rate at which a quantity changes. Graphically, it is the slope of the tangent line.",
        subject: "Calculus",
        createdAt: new Date("2025-11-04"),
        userId: "1",
        difficulty: "medium"
    }
];
const reactQuestions = [
    {
        id: "1",
        question: "What does React.StrictMode do?",
        options: [
            "Prevents mutations",
            "Highlights potential problems",
            "Compiles faster",
            "Improves performance"
        ],
        correctAnswer: 1,
        explanation: "React.StrictMode helps identify potential problems in the application during development."
    },
    {
        id: "2",
        question: "Which hook is used for side effects?",
        options: [
            "useState",
            "useEffect",
            "useContext",
            "useReducer"
        ],
        correctAnswer: 1,
        explanation: "useEffect is the hook used to handle side effects like data fetching and DOM updates."
    }
];
const mockQuizzes = [
    {
        id: "1",
        title: "React Fundamentals",
        subject: "React",
        questions: reactQuestions,
        createdAt: new Date("2025-11-01"),
        userId: "1"
    }
];
}),
"[project]/store/useAppStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppStore",
    ()=>useAppStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mockData$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mockData/index.ts [app-ssr] (ecmascript)");
;
;
const generateId = ()=>Math.random().toString(36).substr(2, 9);
const useAppStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        // Auth state
        user: null,
        isLoggedIn: false,
        isLoading: false,
        // Study state
        notes: __TURBOPACK__imported__module__$5b$project$5d2f$mockData$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockNotes"],
        flashcards: __TURBOPACK__imported__module__$5b$project$5d2f$mockData$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockFlashcards"],
        quizzes: __TURBOPACK__imported__module__$5b$project$5d2f$mockData$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockQuizzes"],
        chatHistory: [],
        quizResults: [],
        // Auth actions
        login: async (email, password)=>{
            set({
                isLoading: true
            });
            // Simulate API call
            await new Promise((resolve)=>setTimeout(resolve, 500));
            const user = __TURBOPACK__imported__module__$5b$project$5d2f$mockData$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"].find((u)=>u.email === email);
            if (user) {
                set({
                    user,
                    isLoggedIn: true,
                    isLoading: false
                });
                localStorage.setItem("auth_token", `mock_token_${user.id}`);
            } else {
                set({
                    isLoading: false
                });
                throw new Error("Invalid credentials");
            }
        },
        signup: async (email, name, password)=>{
            set({
                isLoading: true
            });
            // Simulate API call
            await new Promise((resolve)=>setTimeout(resolve, 500));
            const newUser = {
                id: generateId(),
                email,
                name,
                avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
            };
            set({
                user: newUser,
                isLoggedIn: true,
                isLoading: false
            });
            localStorage.setItem("auth_token", `mock_token_${newUser.id}`);
        },
        logout: ()=>{
            set({
                user: null,
                isLoggedIn: false,
                chatHistory: []
            });
            localStorage.removeItem("auth_token");
        },
        // Note actions
        addNote: (note)=>{
            set((state)=>({
                    notes: [
                        ...state.notes,
                        note
                    ]
                }));
        },
        updateNote: (id, updates)=>{
            set((state)=>({
                    notes: state.notes.map((note)=>note.id === id ? {
                            ...note,
                            ...updates,
                            updatedAt: new Date()
                        } : note)
                }));
        },
        deleteNote: (id)=>{
            set((state)=>({
                    notes: state.notes.filter((note)=>note.id !== id)
                }));
        },
        getNotesBySubject: (subject)=>{
            return get().notes.filter((note)=>note.subject.toLowerCase() === subject.toLowerCase());
        },
        // Flashcard actions
        addFlashcard: (flashcard)=>{
            set((state)=>({
                    flashcards: [
                        ...state.flashcards,
                        flashcard
                    ]
                }));
        },
        updateFlashcard: (id, updates)=>{
            set((state)=>({
                    flashcards: state.flashcards.map((fc)=>fc.id === id ? {
                            ...fc,
                            ...updates
                        } : fc)
                }));
        },
        deleteFlashcard: (id)=>{
            set((state)=>({
                    flashcards: state.flashcards.filter((fc)=>fc.id !== id)
                }));
        },
        getFlashcardsBySubject: (subject)=>{
            return get().flashcards.filter((fc)=>fc.subject.toLowerCase() === subject.toLowerCase());
        },
        // Quiz actions
        addQuiz: (quiz)=>{
            set((state)=>({
                    quizzes: [
                        ...state.quizzes,
                        quiz
                    ]
                }));
        },
        getQuizzes: ()=>get().quizzes,
        addQuizResult: (result)=>{
            set((state)=>({
                    quizResults: [
                        ...state.quizResults,
                        result
                    ]
                }));
        },
        getQuizResults: ()=>get().quizResults,
        // Chat actions
        addChatMessage: (message)=>{
            set((state)=>({
                    chatHistory: [
                        ...state.chatHistory,
                        message
                    ]
                }));
        },
        getChatHistory: ()=>get().chatHistory,
        clearChatHistory: ()=>{
            set({
                chatHistory: []
            });
        },
        // Utility
        getStudyStats: ()=>{
            const state = get();
            const results = state.quizResults;
            const averageScore = results.length > 0 ? Math.round(results.reduce((sum, r)=>sum + r.score / r.totalQuestions * 100, 0) / results.length) : 0;
            return {
                totalNotes: state.notes.length,
                totalFlashcards: state.flashcards.length,
                totalQuizzes: state.quizzes.length,
                studyStreak: 7,
                averageScore,
                recentSessions: []
            };
        }
    }));
}),
"[project]/components/navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useAppStore.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Navigation() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.logout);
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.user);
    const handleLogout = ()=>{
        logout();
        router.push("/");
    };
    const navItems = [
        {
            href: "/dashboard",
            label: "Dashboard",
            icon: "📊"
        },
        {
            href: "/notes",
            label: "Notes",
            icon: "📝"
        },
        {
            href: "/flashcards",
            label: "Flashcards",
            icon: "🎯"
        },
        {
            href: "/quiz",
            label: "Quiz",
            icon: "✅"
        },
        {
            href: "/ai-chat",
            label: "AI Chat",
            icon: "🤖"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "bg-slate-800 border-b border-slate-700 sticky top-0 z-40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center h-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard",
                                className: "text-xl font-bold text-indigo-400",
                                children: "StudyAI"
                            }, void 0, false, {
                                fileName: "[project]/components/navigation.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex gap-1",
                                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: `px-3 py-2 rounded-lg transition-colors ${pathname === item.href ? "bg-indigo-600 text-white" : "text-slate-300 hover:bg-slate-700"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2",
                                                children: item.icon
                                            }, void 0, false, {
                                                fileName: "[project]/components/navigation.tsx",
                                                lineNumber: 43,
                                                columnNumber: 19
                                            }, this),
                                            item.label
                                        ]
                                    }, item.href, true, {
                                        fileName: "[project]/components/navigation.tsx",
                                        lineNumber: 36,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/navigation.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navigation.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-slate-300",
                                children: user?.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Welcome, ",
                                        user.name.split(" ")[0]
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/navigation.tsx",
                                    lineNumber: 51,
                                    columnNumber: 30
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/navigation.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLogout,
                                className: "px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors",
                                children: "Logout"
                            }, void 0, false, {
                                fileName: "[project]/components/navigation.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navigation.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/navigation.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/navigation.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/navigation.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/protected-layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProtectedLayout",
    ()=>ProtectedLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useAppStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ProtectedLayout({ children }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const isLoggedIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.isLoggedIn);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
        if (!isLoggedIn) {
            router.push("/login");
        }
    }, [
        isLoggedIn,
        router
    ]);
    if (!isMounted || !isLoggedIn) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navigation"], {}, void 0, false, {
                fileName: "[project]/components/protected-layout.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/protected-layout.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/services/ai.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Mock AI responses for demonstration
__turbopack_context__.s([
    "generateMockAIResponse",
    ()=>generateMockAIResponse,
    "summarizePdf",
    ()=>summarizePdf
]);
const mockResponses = [
    'To understand React hooks better, think of them as functions that let you "hook into" React features. useState is the most common one for managing component state.',
    "TypeScript interfaces define the structure of objects. They ensure type safety and help prevent bugs by catching type mismatches at compile time rather than runtime.",
    "The Event Loop in JavaScript handles asynchronous operations by managing the call stack, callback queue, and microtask queue. It processes callbacks in the correct order.",
    "Spaced repetition is a technique where you review material at increasing intervals. This helps move information from short-term to long-term memory more effectively.",
    "For exam preparation, create a study schedule that breaks topics into manageable chunks. Review previous topics regularly while learning new material.",
    "Flashcards are effective for memorization because they encourage active recall, forcing your brain to retrieve information rather than passively reading it."
];
async function generateMockAIResponse(userMessage) {
    // Simulate API call delay
    await new Promise((resolve)=>setTimeout(resolve, 800 + Math.random() * 400));
    // Simple keyword matching for relevant responses
    const keywords = userMessage.toLowerCase();
    if (keywords.includes("hook") || keywords.includes("usestate")) {
        return mockResponses[0];
    } else if (keywords.includes("interface") || keywords.includes("typescript")) {
        return mockResponses[1];
    } else if (keywords.includes("event") || keywords.includes("async")) {
        return mockResponses[2];
    } else if (keywords.includes("spaced") || keywords.includes("repeat")) {
        return mockResponses[3];
    } else if (keywords.includes("study") || keywords.includes("exam")) {
        return mockResponses[4];
    } else if (keywords.includes("flashcard") || keywords.includes("memorization")) {
        return mockResponses[5];
    }
    // Default response
    return "That's a great question! Based on your studies, I'd recommend focusing on understanding the core concepts first. Would you like me to explain any specific topics in more detail?";
}
// Client-side PDF summarization stub (frontend only)
// Attempts to call backend /api/summarize; if unavailable, returns a fallback summary.
const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(/\/$/, "");
function joinUrl(base, path) {
    if (!base) return path;
    return `${base}${path.startsWith('/') ? '' : '/'}${path}`;
}
async function summarizePdf(file) {
    const formData = new FormData();
    formData.append("file", file);
    try {
        const url = joinUrl(API_BASE, "/api/summarize");
        const res = await fetch(url, {
            method: "POST",
            body: formData
        });
        if (!res.ok) throw new Error(`Backend responded ${res.status}`);
        // Expecting JSON: { summary: string }
        const data = await res.json().catch(()=>({}));
        return data.summary || "(No summary returned from backend.)";
    } catch (err) {
        console.warn("Summarize API failed or not ready, using fallback.", err);
        return await fallbackSummarize(file);
    }
}
async function fallbackSummarize(file) {
    // Lightweight heuristic: we cannot parse PDF robustly without pdf-parse/pdfjs on client.
    // We just read first bytes to create a placeholder message.
    const sizeKB = (file.size / 1024).toFixed(1);
    let headSample = "";
    try {
        const buf = await file.arrayBuffer();
        const slice = new Uint8Array(buf).subarray(0, 64);
        headSample = Array.from(slice).map((b)=>b >= 32 && b <= 126 ? String.fromCharCode(b) : ".").join("");
    } catch (e) {
        headSample = "(Could not read sample)";
    }
    return `PDF '${file.name}' uploaded (${sizeKB} KB). Backend summarization endpoint not available yet. ` + `Replace this fallback once /api/summarize is implemented. File head sample: \n` + headSample;
}
}),
"[project]/app/ai-chat/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AIChatPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2d$message$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat-message.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$protected$2d$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/protected-layout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$ai$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/ai.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useAppStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function AIChatPage() {
    const chatHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.chatHistory);
    const addChatMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.addChatMessage);
    const clearChatHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.clearChatHistory);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSummarizing, setIsSummarizing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Auto-scroll to bottom
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        chatHistory
    ]);
    const handleSendMessage = async (e)=>{
        e.preventDefault();
        if (!input.trim() || isLoading) return;
        // Add user message
        const userMessage = {
            id: Math.random().toString(36).substr(2, 9),
            content: input,
            role: "user",
            timestamp: new Date()
        };
        addChatMessage(userMessage);
        setInput("");
        setIsLoading(true);
        try {
            // Generate AI response
            const aiResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$ai$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateMockAIResponse"])(input);
            const assistantMessage = {
                id: Math.random().toString(36).substr(2, 9),
                content: aiResponse,
                role: "assistant",
                timestamp: new Date()
            };
            addChatMessage(assistantMessage);
        } catch (error) {
            console.error("Error generating response:", error);
        } finally{
            setIsLoading(false);
        }
    };
    const handleFileChange = (e)=>{
        const file = e.target.files?.[0];
        setSelectedFile(file || null);
    };
    const handleSummarizePdf = async ()=>{
        if (!selectedFile || isSummarizing) return;
        setIsSummarizing(true);
        try {
            const summary = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$ai$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["summarizePdf"])(selectedFile);
            const assistantMessage = {
                id: Math.random().toString(36).substr(2, 9),
                content: summary,
                role: "assistant",
                timestamp: new Date()
            };
            addChatMessage(assistantMessage);
            // Clear selection after summarization
            setSelectedFile(null);
        } catch (error) {
            console.error("Error summarizing PDF:", error);
            const assistantMessage = {
                id: Math.random().toString(36).substr(2, 9),
                content: "Failed to summarize PDF. Please try again later.",
                role: "assistant",
                timestamp: new Date()
            };
            addChatMessage(assistantMessage);
        } finally{
            setIsSummarizing(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$protected$2d$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProtectedLayout"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-screen flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold text-white mb-2",
                                        children: "AI Study Tutor"
                                    }, void 0, false, {
                                        fileName: "[project]/app/ai-chat/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400",
                                        children: "Get instant help with any study topic"
                                    }, void 0, false, {
                                        fileName: "[project]/app/ai-chat/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/ai-chat/page.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            chatHistory.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>clearChatHistory(),
                                className: "px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm font-medium transition-colors",
                                children: "Clear Chat"
                            }, void 0, false, {
                                fileName: "[project]/app/ai-chat/page.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/ai-chat/page.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/ai-chat/page.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 bg-slate-800/50 border border-slate-700 rounded-lg p-6 overflow-y-auto mb-4 space-y-4",
                    children: chatHistory.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-3xl mb-3",
                                    children: "🤖"
                                }, void 0, false, {
                                    fileName: "[project]/app/ai-chat/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 mb-4",
                                    children: "Ask me anything about your studies!"
                                }, void 0, false, {
                                    fileName: "[project]/app/ai-chat/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-sm text-slate-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Try asking:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/ai-chat/page.tsx",
                                            lineNumber: 124,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: '• "Explain React hooks to me"'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/ai-chat/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: '• "What\'s a good study strategy?"'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/ai-chat/page.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: '• "How do flashcards help learning?"'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/ai-chat/page.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/ai-chat/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/ai-chat/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ai-chat/page.tsx",
                            lineNumber: 120,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/ai-chat/page.tsx",
                        lineNumber: 119,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            chatHistory.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2d$message$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatMessage"], {
                                    message: message
                                }, message.id, false, {
                                    fileName: "[project]/app/ai-chat/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, this)),
                            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-start",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-700 text-slate-100 px-4 py-2 rounded-lg rounded-bl-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-slate-500 rounded-full animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/app/ai-chat/page.tsx",
                                                lineNumber: 142,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-slate-500 rounded-full animate-pulse",
                                                style: {
                                                    animationDelay: "0.1s"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/ai-chat/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-slate-500 rounded-full animate-pulse",
                                                style: {
                                                    animationDelay: "0.2s"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/ai-chat/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/ai-chat/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/ai-chat/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/ai-chat/page.tsx",
                                lineNumber: 139,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: messagesEndRef
                            }, void 0, false, {
                                fileName: "[project]/app/ai-chat/page.tsx",
                                lineNumber: 155,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/app/ai-chat/page.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    accept: "application/pdf",
                                    onChange: handleFileChange,
                                    disabled: isSummarizing,
                                    className: "text-sm text-slate-300 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded file:text-sm file:font-semibold file:bg-slate-600 file:text-white hover:file:bg-slate-500"
                                }, void 0, false, {
                                    fileName: "[project]/app/ai-chat/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleSummarizePdf,
                                    disabled: !selectedFile || isSummarizing,
                                    className: "px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-600 text-white rounded-lg text-sm font-medium transition-colors",
                                    children: isSummarizing ? "Summarizing..." : selectedFile ? "Summarize PDF" : "Select PDF"
                                }, void 0, false, {
                                    fileName: "[project]/app/ai-chat/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this),
                                selectedFile && !isSummarizing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-slate-400 truncate max-w-48",
                                    children: selectedFile.name
                                }, void 0, false, {
                                    fileName: "[project]/app/ai-chat/page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ai-chat/page.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSendMessage,
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: input,
                                    onChange: (e)=>setInput(e.target.value),
                                    disabled: isLoading,
                                    placeholder: "Ask me anything...",
                                    className: "flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 disabled:opacity-50"
                                }, void 0, false, {
                                    fileName: "[project]/app/ai-chat/page.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isLoading || !input.trim(),
                                    className: "px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-600 text-white rounded-lg font-medium transition-colors",
                                    children: "Send"
                                }, void 0, false, {
                                    fileName: "[project]/app/ai-chat/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ai-chat/page.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/ai-chat/page.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/ai-chat/page.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/ai-chat/page.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_53c4180e._.js.map