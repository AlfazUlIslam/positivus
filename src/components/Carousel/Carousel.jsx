import { useState, useEffect } from 'react'
import { useResponsive } from "../../hooks"
import { carouselSlidesData } from "../../data"
import { carouselArrow } from "../../assets"
import CarouselSlide from './CarouselSlide'
import "./Carousel.css"

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(1)
    const [length, setLength] = useState(carouselSlidesData.length)
    const [transitionValue, setTransitionValue] = useState('ease-in-out 1s')
    const [slideDist, setSlideDist] = useState(0)

    const windowSize = useResponsive()
    const carouselSlidesStyles = {
        transform: `translateX(-${currentIndex * slideDist}%)`,
        transition: `${transitionValue}`
    }

    useEffect(() => {
        setLength(carouselSlidesData.length)
        
        if (windowSize === 320) {
            setSlideDist(100)
        }
        if (windowSize === 576) {
            setSlideDist(60)
        }
    }, [carouselSlidesData, windowSize])

    const slideToPrevious = () => {
        if ((currentIndex > 0)) {
            setCurrentIndex((prev) => prev - 1)
        }
    }
   
    const slideToNext = () => {
        if ((currentIndex < (length + 1))) {
            setCurrentIndex((prev) => prev + 1)
        }
    }

    // add touch control
    const [touchPosition, setTouchPosition] = useState(null)

    const handleTouchStart = (e) => {
        const initialTouch = e.touches[0].clientX
        setTouchPosition(initialTouch)
    }

    const handleTouchMove = (e) => {
        const initialTouch = touchPosition

        if (initialTouch === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = initialTouch - currentTouch

        if (diff < -5) {
            slideToPrevious()
        }

        if (diff > 5) {
            slideToNext()
        }

        setTouchPosition(null)
    }

    // add infinite looping
    const renderExtraPrev = () => {
        const output = []

        for (let i = 0; i < 3; i++) {
            output.push(carouselSlidesData[length - 1 - i])
        }

        output.reverse()
        return output
    }

    const renderExtraNext = () => {
        const output = []

        for (let i = 0; i < 3; i++) {
            output.push(carouselSlidesData[i])
        }

        return output
    }

    const handleTransitionEnd = () => {
        if (currentIndex == (length + 1) || currentIndex == 0) {
            setTransitionValue('none')
            if (currentIndex == 0) {
                setCurrentIndex(length)
                setTimeout(() => {
                    setTransitionValue('ease-in-out 1s')
                }, 20)
            }
            if (currentIndex == (length + 1)) {
                setCurrentIndex(1)
                setTimeout(() => {
                    setTransitionValue('ease-in-out 1s')
                }, 20)
            }
        }
    }

    return (
        <div 
            className='carousel-container w-[100%] mx-auto mt-[40px] 
            rounded-[25px] pt-[40px] bg-[#191A23] md:rounded-[35px] 
            xl:rounded-[45px] xl:mt-[80px]'
        >   
            <div className="carousel-wrapper">
                <div 
                    className="carousel"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div 
                        className="carousel-slides"
                        style={carouselSlidesStyles}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {renderExtraPrev().map((item) => (
                            <CarouselSlide 
                                key={item.id}
                                quote={item.quote}
                                quotee={item.quotee}
                                position={item.position}
                            />
                        ))}
                        {carouselSlidesData.map((item) => (
                            <CarouselSlide 
                                key={item.id}
                                quote={item.quote}
                                quotee={item.quotee}
                                position={item.position}
                            />
                        ))}
                        {renderExtraNext().map((item) => (
                            <CarouselSlide 
                                key={item.id}
                                quote={item.quote}
                                quotee={item.quotee}
                                position={item.position}
                            />
                        ))}
                    </div>
                </div>
                {/* Carousel nav */}
                <div className='rounded-[25px] bg-[#191A23] pt-[20px] 
                pb-[40px] flex justify-center items-center gap-[200px] 
                md:rounded-[35px] lg:pt-[40px] xl:rounded-[45px] 
                xl:pt-[60px] xl:pb-[40px]'>
                    <div 
                        className="rotate-180 cursor-pointer"
                        onClick={slideToPrevious}
                    >
                        <img
                            className="w-[18px] md:w-[24px] xl:w-auto" 
                            src={carouselArrow} />
                    </div>
                    <div 
                        className="cursor-pointer"
                        onClick={slideToNext}
                    >
                        <img
                            className="w-[18px] md:w-[24px] xl:w-auto" 
                            src={carouselArrow} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Carousel