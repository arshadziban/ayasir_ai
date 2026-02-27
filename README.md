# Ayasir AI Website

[![Node.js](https://img.shields.io/badge/Node.js-v14+-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-Latest-blue)](https://reactjs.org/)

## Overview

Ayasir AI Website is a comprehensive full-stack web application designed to provide AI-powered Islamic conversational interactions and assistance through a modern, responsive user interface. The application features a React.js frontend with Tailwind CSS styling, paired with a Node.js backend server for seamless API communication and intelligent Islamic knowledge processing. This platform serves as an intelligent assistant for Islamic queries, Quranic references, Hadith insights, and Islamic guidance.

### Key Features

<div align="center">

![Key Features](ui/feature.png)

</div>



## System Architecture

```mermaid
flowchart TD
    User(["👤 User\nIslamic Query"])

    subgraph Frontend["🖥️ Frontend Layer — React.js"]
        Chat["💬 Chat Interface"]
        Sidebar["📂 Sidebar Navigation"]
        About["ℹ️ About Page"]
    end

    subgraph Backend["⚙️ Backend Layer — Node.js + Express"]
        API["🔌 API Endpoints\n/api/ask"]
        Handler["🔄 Request Handler"]
        Processor["🧠 AI Relevance & Processing"]
    end

    subgraph AIEngine["🤖 Islamic AI Engine — Perplexity Sonar"]
        Quran["📖 Quranic Knowledge"]
        Hadith["📜 Hadith Analysis"]
        KB["🏛️ Islamic Knowledge Base"]
    end

    User -->|"Types question"| Chat
    Chat & Sidebar & About --> Handler
    Handler --> API
    API --> Processor
    Processor -->|"POST /chat/completions"| Quran & Hadith & KB
    Quran & Hadith & KB -->|"AI Response + Citations"| Processor
    Processor -->|"JSON Response"| Chat
```

## Prerequisites

The following software must be installed before proceeding:

- **Node.js** (v14.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v6.0 or higher) - Bundled with Node.js
- **Python** (v3.8 or higher) - [Download](https://www.python.org/)
- **Git** - [Download](https://git-scm.com/)

## UI Preview

### Application Screenshots

![UI Screenshot 1](ui/1.png)

![UI Screenshot 2](ui/2.png)

![UI Screenshot 3](ui/3.png)

![UI Screenshot 4](ui/4.png)

![UI Screenshot 5](ui/5.png)

![UI Screenshot 6](ui/6.png)

## Conclusion

Ayasir AI Website represents a robust and comprehensive solution for delivering AI-powered Islamic knowledge and assistance. By leveraging modern web technologies and a well-architected full-stack approach, this application provides users with an accessible, reliable, and user-friendly platform for Islamic queries and guidance.The project is designed with scalability, maintainability, and extensibility in mind, making it suitable for both individual users and organizations seeking to integrate Islamic AI capabilities into their digital presence. Whether for personal Islamic learning, community support, or enterprise-level applications, Ayasir AI Website serves as a foundational platform that can be adapted and extended according to specific requirements and use cases.

For questions, contributions, or further development inquiries, please refer to the contributing guidelines and support sections above.