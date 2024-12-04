const Container = (props) => {
    const { styles , children } = props
        
    return (
        // Container
        <div className={`${styles} w-full mx-auto 
        sm:w-[576px] md:w-[768px] lg:w-[992px] 
        xl:w-[1400px]`}>
            {children}
        </div>
    )
}
export default Container