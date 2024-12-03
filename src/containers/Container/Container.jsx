const Container = (props) => {
    const { styles , children } = props
        
    return (
        // Container
        <div className={`${styles} w-full mx-auto 
        xl:w-[1400px]`}>
            {children}
        </div>
    )
}
export default Container