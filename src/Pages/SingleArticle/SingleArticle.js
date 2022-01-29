import React from "react";
import { useParams } from "react-router";
import './SingleArticle.css';
import allArticles from "../../Resources/ArticleContent";
import ArticleList from "../ArticlesList/ArticlesList";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function SingleArticle() {
    const {name} = useParams();
    const article = allArticles.find(article => article.name === name);
    const relatedArticles = allArticles.filter(article => article.name !== name);

    if (!article) {
        return <NotFoundPage />;
    }
    
    return (
        <section id="article">
            <h1>{article.title}</h1>
            {article.content.map((paragraph,key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <h2>Related Articles</h2>
            <ArticleList articles={relatedArticles} />
        </section>
    );
}

export default SingleArticle;