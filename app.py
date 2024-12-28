import streamlit as st
import pandas as pd

# Load the dataset
dataset_path = "Hackathon 2025.csv"
df = pd.read_csv(dataset_path)

# Streamlit App Title
st.title("Hackathon 2025 Dataset Viewer")

# Display the dataset
st.subheader("Dataset Preview")
st.write(df)

# Basic Dataset Information
st.subheader("Basic Dataset Information")
st.write("Number of rows:", df.shape[0])
st.write("Number of columns:", df.shape[1])
st.write("Column names:", list(df.columns))
st.write("Missing Values:")
st.write(df.isnull().sum())

# Dataset Summary
st.subheader("Summary Statistics")
st.write(df.describe(include="all"))

# Filter Dataset
st.subheader("Filter Dataset")
column_to_filter = st.selectbox("Select a column to filter", df.columns)
unique_values = df[column_to_filter].dropna().unique()
filter_value = st.selectbox("Select a value to filter by", unique_values)
filtered_data = df[df[column_to_filter] == filter_value]
st.write("Filtered Data:")
st.write(filtered_data)

# Grouped Data
st.subheader("Group and Aggregate")
group_column = st.selectbox("Select a column to group by", df.columns)
agg_column = st.selectbox("Select a column to aggregate", df.columns)
agg_function = st.selectbox("Select an aggregation function", ["mean", "sum", "count", "min", "max"])
grouped_data = df.groupby(group_column)[agg_column].agg(agg_function).reset_index()
st.write(f"Grouped Data by {group_column} ({agg_function} of {agg_column}):")
st.write(grouped_data)

# Sort Dataset
st.subheader("Sort Dataset")
sort_column = st.selectbox("Select a column to sort by", df.columns)
sort_order = st.radio("Sort Order", ["Ascending", "Descending"])
sorted_data = df.sort_values(by=sort_column, ascending=(sort_order == "Ascending"))
st.write("Sorted Dataset:")
st.write(sorted_data)

# Download Filtered Data
st.subheader("Download Filtered Data")
csv = filtered_data.to_csv(index=False).encode("utf-8")
st.download_button(
    label="Download Filtered CSV",
    data=csv,
    file_name="filtered_data.csv",
    mime="text/csv",
)

# Visualization
st.subheader("Visualization")
vis_column = st.selectbox("Select a column for visualization", df.columns)
vis_type = st.radio("Select a visualization type", ["Bar Chart", "Pie Chart"])

if vis_type == "Bar Chart":
    vis_data = df[vis_column].value_counts()
    st.bar_chart(vis_data)
elif vis_type == "Pie Chart":
    vis_data = df[vis_column].value_counts()
    st.write(vis_data.plot.pie(autopct="%1.1f%%"))
    st.pyplot()
