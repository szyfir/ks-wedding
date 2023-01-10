import { ImageList, ImageListItem, styled, Typography } from "@mui/material";
import Image1 from "../img/gallery/image1.jpg";
import Image2 from "../img/gallery/image2.jpg";
import Image3 from "../img/gallery/image3.jpg";
import Image4 from "../img/gallery/4.jpg";
import Image5 from "../img/gallery/5.jpg";
import Image6 from "../img/gallery/6.jpg";
import Image7 from "../img/gallery/7.jpg";
import Image8 from "../img/gallery/8.jpg";
import Image9 from "../img/gallery/9.jpg";
import { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const itemData = [
    {
        img: Image1,
        title: 'Image1',
    },
    {
        img: Image2,
        title: 'Image2',
    },
    {
        img: Image3,
        title: 'Image3',
    },
    {
        img: Image4,
        title: 'Image4',
    },
    {
        img: Image5,
        title: 'Image5',
    },
    {
        img: Image6,
        title: 'Image6',
    },
    {
        img: Image7,
        title: 'Image7',
    },
    {
        img: Image8,
        title: 'Image8',
    },
    {
        img: Image9,
        title: 'Image9',
    },


];

const Container = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
}));

const PhotoGallery: React.FC<any> = () => {
    const [currentImage, setCurrentImage] = useState<number>(0);
    const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);

    const openImageViewer = useCallback((index: number) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <Container>
            <Typography variant="h4" m={1} p={1}>Prywatne porno</Typography>
            <ImageList sx={{ width: 500, height: 550, overflow: "hidden" }} cols={3} gap={2} rowHeight={164}>
                {itemData.map((item, i) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            onClick={() => openImageViewer(i)}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            {isViewerOpen && (
                <ImageViewer
                    src={itemData.map((w) => w.img)}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    disableScroll={false}
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)"
                    }}
                    closeOnClickOutside={true}
                />
            )}
        </Container>
    )
}

export default PhotoGallery;