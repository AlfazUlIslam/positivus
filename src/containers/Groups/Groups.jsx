const Groups = (props) => {
    const { classes, children } = props
        
    return (
        // Groups
        <div className={`${classes}`}>
            {children}
        </div>
    )
}
export default Groups