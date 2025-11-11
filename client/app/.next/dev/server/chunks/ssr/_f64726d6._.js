module.exports = [
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
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useAppStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const isLoggedIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.isLoggedIn);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isLoggedIn) {
            router.push("/dashboard");
        }
    }, [
        isLoggedIn,
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-transparent pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-md w-full space-y-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold text-white mb-2",
                                children: "StudyAI"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 text-lg",
                                children: "Your personal AI study companion"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-300 text-base leading-relaxed",
                        children: "Master any subject with interactive notes, AI-powered flashcards, quizzes, and real-time AI tutoring."
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 pt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                className: "w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors",
                                children: "Sign In"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/signup",
                                className: "w-full px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors",
                                children: "Create Account"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-8 grid grid-cols-3 gap-4 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-800/50 rounded-lg p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-indigo-400 font-semibold",
                                        children: "Notes"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-400 text-xs",
                                        children: "Organize learning"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-800/50 rounded-lg p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-indigo-400 font-semibold",
                                        children: "Flashcards"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-400 text-xs",
                                        children: "Quick review"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-800/50 rounded-lg p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-indigo-400 font-semibold",
                                        children: "AI Chat"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-400 text-xs",
                                        children: "24/7 tutor"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_f64726d6._.js.map