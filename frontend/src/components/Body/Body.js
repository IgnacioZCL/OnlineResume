import './Body.css';

const Body = (props) => {
    return (
        <>
        <div className="blue-background body-title white-text font-weight-bold">{props.title}</div>
        <div className="body-content">{props.content}</div>
        
            
        </>
    );
};

export default Body;