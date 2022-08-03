import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './imageList';

class App extends React.Component {
    state = { images: [] };
    
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos',{
            params: { query: term, per_page: 50 },
        });

        this.setState({ images: response.data.results });
    }
    
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmitText={this.onSearchSubmit} />
                <ImageList images={ this.state.images } />
            </div>
        );
    }
}

export default App;