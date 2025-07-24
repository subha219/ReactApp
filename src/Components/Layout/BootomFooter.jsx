import React from 'react';

function BootomFooter() {
    return (
        <footer style={{'backgroundColor': 'black'}} className="footer fixed-bottom">
            <div className="container text-center">
                <span className="text-white">
                    This is the sticky footer.
                </span>
            </div>
        </footer>
    );
}

export default BootomFooter;