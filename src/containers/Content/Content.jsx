const Content = (props) => {
    const { styles, children } = props
        
    return (
        // Content
        <div className={`${styles}`}>
            {children}
        </div>
    )
}
export default Content