from fastapi import FastAPI

app = FastAPI(title="Kol Torah API")


@app.get("/hello")
async def hello():
    """Hello world endpoint"""
    return {"message": "Hello, World!"}
