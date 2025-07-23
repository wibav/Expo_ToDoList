# Task Manager - React Native App

A modern, feature-rich task management application built with React Native and Expo, featuring native date/time pickers, SQLite database, and a beautiful Material Design interface.

---

## 🇬🇧 English

### 📱 Features

- **Task Management**: Create, edit, delete, and toggle task completion
- **Native Date/Time Pickers**: Integrated iOS and Android date/time selection
- **SQLite Database**: Local storage with full CRUD operations
- **Material Design**: Clean, modern UI using React Native Paper
- **Navigation**: Drawer and Stack navigation with React Navigation
- **Responsive Design**: Optimized for both iOS and Android
- **Multiple Entry Points**: Both modal (ActionSheet) and screen-based task creation/editing

### 🏗️ Architecture

- **Frontend**: React Native with Expo
- **Database**: SQLite (expo-sqlite)
- **State Management**: React Context API with useReducer
- **Navigation**: React Navigation v6 (Drawer + Stack)
- **UI Components**: React Native Paper (Material Design)
- **Date/Time**: @react-native-community/datetimepicker

### 🛠️ Tech Stack

```json
{
  "framework": "React Native + Expo",
  "database": "SQLite",
  "navigation": "React Navigation v6",
  "ui": "React Native Paper",
  "state": "Context API + useReducer",
  "date": "Native DateTimePicker",
  "gestures": "React Native Gesture Handler",
  "gradients": "Expo Linear Gradient"
}
```

### 📦 Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd RN_ToDoList
```

2. **Install dependencies**

```bash
yarn install
# or
npm install
```

3. **Start the development server**

```bash
yarn start
# or
npm start
```

4. **Run on device/simulator**

```bash
# iOS
yarn ios

# Android
yarn android
```

### 🗄️ Database Schema

```sql
CREATE TABLE tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    date TEXT,
    time TEXT,
    completed INTEGER DEFAULT 0,
    created_at TEXT,
    updated_at TEXT
);
```

### 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── DrawerMenu.js    # Navigation drawer
│   ├── Header.js        # App header
│   ├── TaskActionSheet.js # Modal for task creation/editing
│   └── TaskItem.js      # Individual task component
├── context/             # State management
│   └── TaskContext.js   # Global task state and database operations
├── navigations/         # Navigation configuration
│   └── AppNavigator.js  # Main navigation setup
├── screens/            # Application screens
│   ├── TaskListScreen.js # Main task list view
│   ├── TaskAddScreen.js  # Add task form
│   ├── TaskEditScreen.js # Edit task form
│   └── SettingScreen.js  # Settings page
└── AppStyles.js        # Global styles and theme
```

### 🔧 Key Components

#### TaskContext.js

- Database initialization and management
- CRUD operations for tasks
- Global state management with Context API

#### TaskListScreen.js

- Main interface with task list
- FAB button for quick task creation
- Integration with ActionSheet modal

#### TaskActionSheet.js

- Modal component for task creation/editing
- Native date/time picker integration
- Form validation and data handling

#### TaskAddScreen.js / TaskEditScreen.js

- Full-screen forms for detailed task management
- Consistent UI with ActionSheet component
- Native date/time picker support

### 🚀 Usage Examples

#### Creating a Task

```javascript
const taskData = {
  title: 'Complete project',
  description: 'Finish the React Native app',
  date: '2025-01-15',
  time: '14:30',
};

await addTask(
  taskData.title,
  taskData.description,
  taskData.date,
  taskData.time,
);
```

#### Updating a Task

```javascript
const updates = {
  title: 'Updated title',
  description: 'Updated description',
  completed: 1,
};

await updateTask(taskId, updates);
```

### 📱 Screenshots

The app features:

- Clean task list with Material Design cards
- Native date/time pickers for iOS and Android
- Smooth drawer navigation
- ActionSheet modal for quick actions
- Dark/light theme support through React Native Paper

### 🧪 Testing

Run ESLint to check code quality:

```bash
yarn lint
```

### 📄 License

This project is licensed under the MIT License.

---

## 🇧🇷 Português

### 📱 Funcionalidades

- **Gerenciamento de Tarefas**: Criar, editar, excluir e alternar conclusão de tarefas
- **Seletores Nativos de Data/Hora**: Seleção integrada de data/hora para iOS e Android
- **Banco SQLite**: Armazenamento local com operações CRUD completas
- **Material Design**: Interface limpa e moderna usando React Native Paper
- **Navegação**: Navegação por drawer e stack com React Navigation
- **Design Responsivo**: Otimizado para iOS e Android
- **Múltiplos Pontos de Entrada**: Criação/edição de tarefas via modal (ActionSheet) e telas dedicadas

### 🏗️ Arquitetura

- **Frontend**: React Native com Expo
- **Banco de Dados**: SQLite (expo-sqlite)
- **Gerenciamento de Estado**: Context API do React com useReducer
- **Navegação**: React Navigation v6 (Drawer + Stack)
- **Componentes UI**: React Native Paper (Material Design)
- **Data/Hora**: @react-native-community/datetimepicker

### 🛠️ Stack Tecnológica

```json
{
  "framework": "React Native + Expo",
  "banco": "SQLite",
  "navegacao": "React Navigation v6",
  "ui": "React Native Paper",
  "estado": "Context API + useReducer",
  "data": "DateTimePicker Nativo",
  "gestos": "React Native Gesture Handler",
  "gradientes": "Expo Linear Gradient"
}
```

### 📦 Instalação

1. **Clone o repositório**

```bash
git clone <url-do-repositorio>
cd RN_ToDoList
```

2. **Instale as dependências**

```bash
yarn install
# ou
npm install
```

3. **Inicie o servidor de desenvolvimento**

```bash
yarn start
# ou
npm start
```

4. **Execute no dispositivo/simulador**

```bash
# iOS
yarn ios

# Android
yarn android
```

### 🗄️ Esquema do Banco de Dados

```sql
CREATE TABLE tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    date TEXT,
    time TEXT,
    completed INTEGER DEFAULT 0,
    created_at TEXT,
    updated_at TEXT
);
```

### 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes UI reutilizáveis
│   ├── DrawerMenu.js    # Menu lateral de navegação
│   ├── Header.js        # Cabeçalho do app
│   ├── TaskActionSheet.js # Modal para criação/edição de tarefas
│   └── TaskItem.js      # Componente individual de tarefa
├── context/             # Gerenciamento de estado
│   └── TaskContext.js   # Estado global e operações de banco
├── navigations/         # Configuração de navegação
│   └── AppNavigator.js  # Configuração principal de navegação
├── screens/            # Telas da aplicação
│   ├── TaskListScreen.js # Visualização principal da lista
│   ├── TaskAddScreen.js  # Formulário de adição de tarefa
│   ├── TaskEditScreen.js # Formulário de edição de tarefa
│   └── SettingScreen.js  # Página de configurações
└── AppStyles.js        # Estilos globais e tema
```

### 🔧 Componentes Principais

#### TaskContext.js

- Inicialização e gerenciamento do banco de dados
- Operações CRUD para tarefas
- Gerenciamento de estado global com Context API

#### TaskListScreen.js

- Interface principal com lista de tarefas
- Botão FAB para criação rápida de tarefas
- Integração com modal ActionSheet

#### TaskActionSheet.js

- Componente modal para criação/edição de tarefas
- Integração com seletores nativos de data/hora
- Validação de formulário e manipulação de dados

#### TaskAddScreen.js / TaskEditScreen.js

- Formulários em tela cheia para gerenciamento detalhado
- Interface consistente com componente ActionSheet
- Suporte a seletores nativos de data/hora

### 🚀 Exemplos de Uso

#### Criando uma Tarefa

```javascript
const taskData = {
  title: 'Concluir projeto',
  description: 'Finalizar o app React Native',
  date: '2025-01-15',
  time: '14:30',
};

await addTask(
  taskData.title,
  taskData.description,
  taskData.date,
  taskData.time,
);
```

#### Atualizando uma Tarefa

```javascript
const updates = {
  title: 'Título atualizado',
  description: 'Descrição atualizada',
  completed: 1,
};

await updateTask(taskId, updates);
```

### 📱 Capturas de Tela

O app apresenta:

- Lista limpa de tarefas com cards Material Design
- Seletores nativos de data/hora para iOS e Android
- Navegação suave por drawer
- Modal ActionSheet para ações rápidas
- Suporte a temas claro/escuro através do React Native Paper

### 🧪 Teste

Execute o ESLint para verificar a qualidade do código:

```bash
yarn lint
```

### 📄 Licença

Este projeto está licenciado sob a Licença MIT.

---

## 🚀 Quick Start

1. Install dependencies: `yarn install`
2. Start development server: `yarn start`
3. Run on device: `yarn ios` or `yarn android`
4. Check code quality: `yarn lint`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Built with ❤️ using React Native and Expo**
